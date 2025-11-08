import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { users as initialUsers } from '../db';
import { UserContext } from '../UserContext';

const DARK_BLUE = '#002147';
const ABBOT_BLUE = '#44b8f3';

const OrgPageWrapper = styled.div`
  max-width: 850px;
  margin: 4rem auto 0 auto;
  background: #f7fbff;
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(50,70,120,0.08);
  min-height: 60vh;
`;
const OrgTitle = styled.h1`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
  font-size: 2.5rem;
  margin-bottom: 1.4rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;
const TableHead = styled.thead`
  background: ${ABBOT_BLUE};
  color: white;
`;
const Th = styled.th`
  padding: 1rem 0.6rem;
  font-family: var(--andover-font-sans);
  font-size: 1.10rem;
  border-bottom: 2.5px solid ${ABBOT_BLUE};
  text-align: left;
`;
const Td = styled.td`
  padding: 0.9rem 0.4rem;
  font-family: var(--andover-font-sans);
  border-bottom: 1px solid #e1eaf4;
  font-size: 1.02rem;
  color: ${DARK_BLUE};
`;
const RoleCell = styled(Td)`
  font-weight: 600;
  text-transform: capitalize;
`;
const MeTag = styled.span`
  color: ${ABBOT_BLUE};
  margin-left: 0.3rem;
  font-size: 0.98em;
  font-style: italic;
`;
const OrgButton = styled.button`
  padding: 0.45rem 0.9rem;
  background: #f8d77a;
  color: #946303;
  border: none;
  border-radius: 7px;
  font-weight: 600;
  font-family: var(--andover-font-sans);
  cursor: pointer;
  margin-right: 0.5rem;
  margin-bottom: 0.2rem;
  box-shadow: 0 1.5px 6px #f7edd880;
  transition: background 0.18s;
  &:hover { background: #ffe57f; color: #715000; }
`;
const Feedback = styled.div`
  color: #217330;
  font-weight: 500;
  margin-top: 0.6rem;
`;

function getCoLead(users) {
  return users.find(u => u.role === 'co-lead');
}

export default function Organisation() {
  const { activeUser } = useContext(UserContext);
  const [orgUsers, setOrgUsers] = useState(initialUsers);
  const [feedback, setFeedback] = useState('');

  const coLead = getCoLead(orgUsers);

  const handleMakeCoLead = (userId) => {
    setOrgUsers(users => users.map(u =>
      u.id === userId ? { ...u, role: 'co-lead' } : u.role === 'co-lead' ? { ...u, role: 'user' } : u
    ));
    setFeedback('Co-Lead reassigned!');
    setTimeout(() => setFeedback(''), 1750);
  };
  const handleRemoveCoLead = (userId) => {
    setOrgUsers(users => users.map(u => u.id === userId ? { ...u, role: 'user' } : u));
    setFeedback('Co-Lead demoted to user.');
    setTimeout(() => setFeedback(''), 1750);
  };
  const handleSendAlert = (name) => {
    setFeedback(`Alert sent to ${name}!`);
    setTimeout(() => setFeedback(''), 1800);
  };

  const canLead = activeUser?.role === 'lead';
  const canCoLead = activeUser?.role === 'co-lead';

  return (
    <OrgPageWrapper>
      <OrgTitle>Organisation Members</OrgTitle>
      <Table>
        <TableHead>
          <tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Actions</Th>
          </tr>
        </TableHead>
        <tbody>
          {orgUsers.map(u => {
            const isMe = activeUser?.id === u.id;
            let actionCol = null;
            // LEAD can make/remove co-lead (but not for self or lead), all else: alert
            if (canLead && u.id !== activeUser.id) {
              if (u.role === 'co-lead') {
                actionCol = (
                  <OrgButton onClick={() => handleRemoveCoLead(u.id)}>
                    Remove Co-Lead
                  </OrgButton>
                );
              } else if (u.role === 'user') {
                actionCol = (
                  <OrgButton onClick={() => handleMakeCoLead(u.id)}>
                    Make Co-Lead
                  </OrgButton>
                );
              } // No reassignment for lead
              if (u.role !== 'lead') {
                actionCol = <>{actionCol}<OrgButton onClick={() => handleSendAlert(u.name)}>Alert</OrgButton></>;
              }
            } else if (canCoLead && u.id !== activeUser.id && u.role !== 'lead') {
              // Co-lead can alert users only
              actionCol = <OrgButton onClick={() => handleSendAlert(u.name)}>Alert</OrgButton>;
            } else {
              actionCol = '—';
            }
            return (
              <tr key={u.id}>
                <Td>{u.name}{isMe && <MeTag>(you)</MeTag>}</Td>
                <Td>{u.email}</Td>
                <RoleCell>{u.role.length > 0 ? u.role.replace('-', ' ').replace(/\w/g, l => l.toUpperCase()) : ''}</RoleCell>
                <Td>{actionCol}</Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {feedback && <Feedback>{feedback}</Feedback>}
    </OrgPageWrapper>
  );
}
