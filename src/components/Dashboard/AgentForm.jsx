import React, { useContext } from 'react';
import { Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';
import useSignupForm from '../hooks/useAgentForm';
import DashboardCtx from '../Dashboard/DashboardCtx';
import { agentsList, defaultValue } from '../../constants';

const AgentForm = () => {
  const { agentId } = useContext(DashboardCtx);
  const agent = agentsList.find((a) => a.id === agentId);

  const { handleSubmit, handleChange } = useSignupForm(agent);

  return (
    <Box variant="card">
      <Box as="form" onSubmit={handleSubmit}>
        <h1>{agent.name}</h1>
        {agent.fields.map((field) => (
          <Box>
            <Label>{field}</Label>
            <Input
              type="number"
              step="any"
              placeholder={defaultValue[field]}
              name={field}
              onChange={handleChange}
            ></Input>
          </Box>
        ))}
        <Button type="submit" color="black">
          poof
        </Button>
      </Box>
    </Box>
  );
};

export default AgentForm;
