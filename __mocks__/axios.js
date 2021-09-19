export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 1,
          title: "THis is a test",
        },
        {
          id: 2,
          title: "THis is a test2",
        },
      ],
    })
  ),
};
