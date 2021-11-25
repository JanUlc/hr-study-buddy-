import StudentListItem from  './StudentsListItem';

export default {
    title: 'Components/Molecules/StudentListItem',
    component: StudentListItem,
}

const mockedData = {
    name: 'Adam Romanski',
    attendance: '55%',
    average: '3.4',
}

const Template = (args) => <StudentListItem  {...args} />

export const Default = Template.bind({});
Default.args = {
  userData: mockedData,
};