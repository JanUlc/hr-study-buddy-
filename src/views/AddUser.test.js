import React from "react";
import { renderWithProviders } from 'helpers/RenderWithProviders/renderWithProviders';
import { screen, fireEvent } from "@testing-library/react";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '45%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '3' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grażyna');
  });
});
