import unittest
from HttpExample import main as func


class TestFunction(unittest.TestCase):
    def test_example(self):
        class MockRequest:
            def __init__(self):
                self.params = {"name": "Sumanth"}
        req = MockRequest()
        resp = func(req)
        self.assertIn("Sumanth", resp.get_body().decode())
