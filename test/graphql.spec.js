const server = require("../index")
const { createTestClient } = require("apollo-server-testing")

const { query } = createTestClient(server)

it('Fetch Special By Zip', async () => {
    const res = await query({ query: GET_SPECIALS, variables: { filter: "91001" } })

    expect(res).toMatchSnapshot();
})