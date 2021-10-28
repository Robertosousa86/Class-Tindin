import fakeServer from './fakeServer';

const PORT = 8080;

fakeServer.listen(PORT, () => {
  console.log(`Fake Server running at http://localhost:${PORT}`);
});
