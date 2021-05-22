({
    name: "EasyDim", // Category Name
    description: "Dimmer light on lamp",
    author: "ArtronShop",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#2ECC71", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="easydim_write">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        },
    ]
});
