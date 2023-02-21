# megaventory-ul
Display a list of Purchase Orders as links, when someone clicks the order a window pops up with more information about the corresponding Purchase Order.

## code
```javascript
const ul = document.createElement('ul');
    json.mvPurchaseOrders.forEach(order => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = `${order.PurchaseOrderTypeAbbreviation} - ${order.PurchaseOrderNo}`;
      li.appendChild(link);
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
```
Each 'li' must display some information, in our case PurchaseOrderTypeAbbreviation and PurchaseOrderNo, for each purchase order inside the JSON file.
In this part of the code the 'ul', 'li' and 'a' elements were created. 
As the 'li' and 'a' elements are needed more times, they were created inside a forEach loop as many times as Purchase Orders exist in the JSON file. 
And then the 'a' element was appended in the 'li' element ,and the 'li' element in the 'ul' element.
In fewer words, for each purchase order a link was created in an unordered list.

```javascript
 link.addEventListener('click', () => {
        const windowFeatures = 'width=800,height=600,menubar=no,toolbar=no,location=no,scrollbars=yes,resizable=yes';
        const popup = window.open('', 'Purchase Order Details', windowFeatures);
        popup.document.body.innerHTML = '';
 ```
After the list is created, the links will display in a new window some additional information for the Purchase Orders.
The above code shows that when the 'a' element is clicked a popup window opens with the additional information.
The additional informations will be:
- PurchaseOrderAddress
- PurchaseOrderContactPerson
- PurchaseOrderStatus
- PurchaseOrderDetails(as a table): 
  - PurchaseOrderRowProductSKU
  - PurchaseOrderRowQuantity 
  - PurchaseOrderRowUnitPriceWithoutTaxOrDiscount 
  - PurchaseOrderRowTotalAmount

```javascript
const contentDiv = document.createElement('div');

        const poAddress = document.createElement('p');
        poAddress.textContent = `Purchase Order Address: ${order.PurchaseOrderAddress}`;
        contentDiv.appendChild(poAddress);

        const poContactPerson = document.createElement('p');
        poContactPerson.textContent = `Purchase Order Contact Person: ${order.PurchaseOrderContactPerson}`;
        contentDiv.appendChild(poContactPerson);

        const poStatus = document.createElement('p');
        poStatus.textContent = `Purchase Order Status: ${order.PurchaseOrderStatus}`;
        contentDiv.appendChild(poStatus);
 ```
 A 'div' element is created in the popup window, where the 'p' elements will display the additional information.
 And the 'p' elements are being appended inside the 'div' element.
 
 ```javascript
 const poDetailsTable = document.createElement('table');
        const poDetailsTableHeader = document.createElement('tr');
        const poDetailsTableHeaderProductSKU = document.createElement('th');
        poDetailsTableHeaderProductSKU.textContent = 'Product SKU';
        poDetailsTableHeader.appendChild(poDetailsTableHeaderProductSKU);
        const poDetailsTableHeaderQuantityOrdered = document.createElement('th');
        poDetailsTableHeaderQuantityOrdered.textContent = 'Quantity Ordered';
        poDetailsTableHeader.appendChild(poDetailsTableHeaderQuantityOrdered);
        const poDetailsTableHeaderUnitPrice = document.createElement('th');
        poDetailsTableHeaderUnitPrice.textContent = 'Unit Price';
        poDetailsTableHeader.appendChild(poDetailsTableHeaderUnitPrice);
        const poDetailsTableHeaderTotalAmount = document.createElement('th');
        poDetailsTableHeaderTotalAmount.textContent = 'Total Amount';
        poDetailsTableHeader.appendChild(poDetailsTableHeaderTotalAmount);
        poDetailsTable.appendChild(poDetailsTableHeader);
```
Here the table for Purchase Order Details is created with the corresponding Headers/Titles.
And in the code below with the help of the forEach loop the Purchase Order Details table is being filled with the additional information from the JSON file.
So for each value in the array of the Purchase Order Details a table row is created and the corresponding table data are implemented.
And the table data must be appended in the same order as the table headers were created.
```javascript
        order.PurchaseOrderDetails.forEach(detail => {
          const poDetailsTableRow = document.createElement('tr');
          const poDetailsTableRowProductSKU = document.createElement('td');
          poDetailsTableRowProductSKU.textContent = detail.PurchaseOrderRowProductSKU;
          poDetailsTableRow.appendChild(poDetailsTableRowProductSKU);
          const poDetailsTableRowQuantityOrdered = document.createElement('td');
          poDetailsTableRowQuantityOrdered.textContent = detail.PurchaseOrderRowQuantity;
          poDetailsTableRow.appendChild(poDetailsTableRowQuantityOrdered);
          const poDetailsTableRowUnitPrice = document.createElement('td');
          poDetailsTableRowUnitPrice.textContent = detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount;
          poDetailsTableRow.appendChild(poDetailsTableRowUnitPrice);
          const poDetailsTableRowTotalAmount = document.createElement('td');
          poDetailsTableRowTotalAmount.textContent = detail.PurchaseOrderRowTotalAmount;
          poDetailsTableRow.appendChild(poDetailsTableRowTotalAmount);
          poDetailsTable.appendChild(poDetailsTableRow);
```
And this concludes the list creation, the Purchases Orders being clickable links and the window popup information.

Thanks for reading the code explanation,
Tony
