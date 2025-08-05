const httpTrigger = require('../src/functions/httpTrigger');

describe('HTTP Trigger Function Tests', () => {
  let context;

  beforeEach(() => {
    context = {
      log: jest.fn(),
    };
  });

  test('should return status 200', async () => {
    const request = {}; // dummy request
    const response = await httpTrigger(request, context);
    expect(response.status).toBe(200);
  });

  test('should include correct message in response body', async () => {
    const request = {};
    const response = await httpTrigger(request, context);
    expect(response.body).toBe("Hello, World! Hey Sumanth How're you ....i think your id id 9040660");
  });

  test('should call context.log once', async () => {
    const request = {};
    await httpTrigger(request, context);
    expect(context.log).toHaveBeenCalledTimes(1);
  });

  test('should handle empty request object', async () => {
    const response = await httpTrigger(null, context);
    expect(response.status).toBe(200);
  });
});
