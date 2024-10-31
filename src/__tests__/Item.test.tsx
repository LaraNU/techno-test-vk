import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "../components/Item";

describe("Item Component", () => {
  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();

  const props = {
    id: 1,
    name: "Test Item",
    description: "This is a test description.",
    owner: {
      avatar_url: "http://example.com/avatar.jpg",
    },
    onDelete: mockOnDelete,
    onEdit: mockOnEdit,
  };

  beforeEach(() => {
    render(<Item {...props} />);
  });

  test("renders item with name and description", () => {
    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  test("calls onDelete when delete button is clicked", () => {
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalled();
  });
});
