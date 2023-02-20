fetch('3291ead6-82a2-43fa-ba6e-58328b4e02a1.json')
  .then(response => response.json())
  .then(json => {
    const ul = document.createElement('ul');
    json.mvPurchaseOrders.forEach(order => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = `${order.PurchaseOrderTypeAbbreviation} - ${order.PurchaseOrderNo}`;
      link.addEventListener('click', () => {
        const windowFeatures = 'width=800,height=600,menubar=no,toolbar=no,location=no,scrollbars=yes,resizable=yes';
        const popup = window.open('', 'Purchase Order Details', windowFeatures);
        popup.document.body.innerHTML = '';
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
        });

        contentDiv.appendChild(poDetailsTable);
        popup.document.body.appendChild(contentDiv);
      });

      li.appendChild(link);
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  })
  .catch(error => console.error('Didnt Fetch JSON', error));
