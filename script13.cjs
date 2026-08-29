const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /let html = '<table style="width:100%; text-align:left; font-size:14px; margin-bottom:10px; border-collapse:collapse;">';[\s\S]*?didOpen: \(\) => \{/;

const replacement = `const agreedPrice = parseFloat(order.agreedPriceInr) || 0;
        const totalPaid = installments.reduce((sum, inst) => inst.status === 'Paid' ? sum + (parseFloat(inst.amount) || 0) : sum, 0);
        const isFullPaid = totalPaid >= agreedPrice;

        let html = '';
        if (isFullPaid && agreedPrice > 0) {
            html += '<div style="background-color: #dcfce7; color: #166534; padding: 12px; border-radius: 6px; font-weight: bold; margin-bottom: 15px; border: 1px solid #bbf7d0; font-size: 16px;">✓ FULL PAID (' + agreedPrice + ')</div>';
        }

        html += '<table style="width:100%; text-align:left; font-size:14px; margin-bottom:10px; border-collapse:collapse;">';
        html += '<tr style="border-bottom:1px solid #ccc"><th>Title</th><th>Amount</th><th>Status</th></tr>';
        if (installments.length === 0) {
            html += '<tr><td colspan="3" style="text-align:center; padding:10px;">No installments found.</td></tr>';
        }
        installments.forEach((inst, i) => {
            html += \`<tr style="border-bottom:1px solid #eee">
                <td style="padding:5px 0">\${inst.title}</td>
                <td style="padding:5px 0">\${inst.amount}</td>
                <td style="padding:5px 0">
                    \${inst.status === 'Paid' ? '<span style="color:green; font-weight:bold;">Paid</span>' : \`<button id="pay-btn-\${i}" class="swal2-confirm swal2-styled" style="padding:4px 8px; font-size:12px; margin:0">Pay</button>\`}
                </td>
            </tr>\`;
        });
        html += '</table>';

        const result = await Swal.fire({
            title: 'Manage Installments',
            html: html,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Add Installment',
            cancelButtonText: 'Close',
            didOpen: () => {
                if (isFullPaid && agreedPrice > 0) {
                    const btn = Swal.getConfirmButton();
                    if (btn) {
                        btn.disabled = true;
                        btn.style.backgroundColor = '#ccc';
                        btn.style.color = '#666';
                        btn.style.cursor = 'not-allowed';
                        btn.title = 'Order is fully paid';
                    }
                }`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
