import React, { useState } from 'react';
import { Box, Button } from 'rebass'
import { Label,
    Select } from '@rebass/forms'

const AgentForm = (props) => {
    const { addAgent } = props
    const [name, setName] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        addAgent({key: name})
    }
    return (
        <Box as='form' style={{padding: "50px"}} onSubmit={handleSubmit}>
            <Label htmlFor='agents'>Agents</Label>
            <Select id="agents" name="Agents" onChange={e => { console.log('woooo'); setName(e.target.value) }}>
                <option>Monte Carlo</option>
                <option>SARSA</option>
                <option>Q Learning</option>
                <option>Double Q Learning</option>
            </Select>
            <Button type="submit">poof</Button>
        </Box>
    );
};

export default AgentForm;