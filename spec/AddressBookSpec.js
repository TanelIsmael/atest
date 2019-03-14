describe('Address Book', function() {
    it('should be able to add a contact', function () {
        var addressBook = new AddressBook (),
            thisContact = new thisContact();

        AddressBook.addContact(thisContact);

        expect(AddressBook.getContact(0)).toBe(thisContact);

    });
});