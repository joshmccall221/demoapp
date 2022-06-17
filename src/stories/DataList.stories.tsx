import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListOfRequests } from '../Components/ListOfRequests';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs';
import mocker from 'mocker-data-generator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Dashboard/ListOfRequests',
  component: ListOfRequests,
  decorators: [withKnobs],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ListOfRequests>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListOfRequests> = (args) => <ListOfRequests {...args} />;

export const NoData = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoData.args = {
  //@ts-ignore
  items: array(undefined, undefined)
};


const getMockData = async () => await mocker()
  .schema(
    'request',
    {
      c_ticket_number: { faker: 'name.firstName' },
      path: { faker: 'name.lastName' },
      s_ticket_number: { faker: 'address.country' },
      s_time: { faker: 'date.past' },
      u_time: { faker: 'name.firstName' },
      u_by: { faker: 'name.lastName' },
      status: { faker: 'address.country' },
    },
    200)
  .build()
  .then(({ request }: any) => { return request })
  .catch((reason: any) => { console.log({ reason }); });

export const WithData = Template.bind({});
WithData.args = {
  items: [],
  getItems: getMockData
};


const sampleData = [{
  "c_ticket_number": "Adaline",
  "path": "Schmeler",
  "s_ticket_number": "Heard Island and McDonald Islands",
  "s_time": "2021-12-20T18:50:45.568Z",
  "u_time": "Sylvan",
  "u_by": "Collins",
  "status": "Saint Vincent and the Grenadines"
},
{
  "c_ticket_number": "Casimer",
  "path": "Heidenreich",
  "s_ticket_number": "Virgin Islands, U.S.",
  "s_time": "2021-08-03T02:02:50.405Z",
  "u_time": "Annetta",
  "u_by": "Kilback",
  "status": "Saint Barthelemy"
}]

export const Knobbs = Template.bind({});

Knobbs.args = {
  //@ts-ignore
  items: array('items', sampleData, ',')
};




