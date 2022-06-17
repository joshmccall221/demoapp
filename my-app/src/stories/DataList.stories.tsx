import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListOfRequests } from '../Components/ListOfRequests';
import mocker from 'mocker-data-generator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Dashboard/ListOfRequests',
  component: ListOfRequests,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ListOfRequests>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListOfRequests> = (args) => <ListOfRequests {...args} />;

export const NoData = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoData.args = {
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
  .then(({ request }: any) => {    return request  })
  .catch((reason: any) => { console.log({ reason }); });

//   const mockymock = await getMockData();
//   console.log({mockymock})
export const WithData = Template.bind({});
WithData.args = {
  items: [],
  getItems: getMockData
};



