import React from 'react';
import { Box, Button } from 'rebass';
import { Label } from '@rebass/forms';
import { Input, Select, ModalContent, ModalWrapper } from '../styles';
import useAgentForm from '../hooks/useAgentForm';
import { agentsList, defaultValue } from '../../constants';

const AgentForm = () => {
  const {
    agent,
    handleAgentChange,
    handleChange,
    handleSubmit,
  } = useAgentForm();
  return (
    <ModalWrapper>
      <ModalContent as="form" onSubmit={handleSubmit}>
        <Label>choose an Agent</Label>
        <Select defaultValue={agentsList[0].name} onChange={handleAgentChange}>
          {agentsList.map((a, idx) => (
            <option key={idx} value={a.key}>
              {a.name}
            </option>
          ))}
        </Select>
        {agent.fields.map((field, idx) => (
          <Box key={idx}>
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
      </ModalContent>
    </ModalWrapper>
  );
};

export default AgentForm;
