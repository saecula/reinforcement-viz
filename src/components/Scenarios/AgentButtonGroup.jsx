import React from 'react';
import { Flex } from 'rebass';
import AgentButton from './SingleScenario';
import { agentsList } from '../../constants';

const AgentButtonGroup = () => (
  <Flex flexDirection="column" minWidth="15em">
    {agentsList.map((agent, idx) => (
      <AgentButton key={idx} agent={agent} />
    ))}
  </Flex>
);

export default AgentButtonGroup;
