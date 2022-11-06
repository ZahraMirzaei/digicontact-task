import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { contactsList } from "../../../mocks/data";
import { contactsGroupMaker } from "../../../utils/organizedData";
import { ShowCardContextProvider } from "../contactCard/showCardContext";
import { IOrganizeContactList } from "../contactsInterface";
import ContactsList from "./ContactsList";

describe("contactList", () => {
  const groupedContactsList = contactsGroupMaker(contactsList);
  const activeContacts = groupedContactsList.filter(
    (item: IOrganizeContactList) => item.alphabet === "m"
  )[0].records;

  test('show 2 contacts that their lastName started with "m"', () => {
    render(<ContactsList contacts={activeContacts} />);
    const contactsList = screen.getAllByRole("listitem");
    expect(contactsList).toHaveLength(2);
  });

  test("show contact card, when contact item clicked", () => {
    render(<ContactsList contacts={activeContacts} />, {
      wrapper: ShowCardContextProvider,
    });
    const listElement = screen.getByText(/MARTINEZ$/i);
    userEvent.click(listElement);
    const contactEmail = screen.queryByText("ron.martinez@example.com");
    expect(contactEmail).toBeInTheDocument();
  });

  test("hidden contact card, when close button clicked", async () => {
    render(<ContactsList contacts={activeContacts} />, {
      wrapper: ShowCardContextProvider,
    });
    const listElement = screen.getByText(/MARTINEZ$/i);
    userEvent.click(listElement);
    const contactEmail = screen.queryByText("ron.martinez@example.com");
    const closeBtn = screen.queryByRole("button");
    userEvent.click(closeBtn!);
    expect(contactEmail).not.toBeInTheDocument();
  });
});
