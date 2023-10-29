import { store } from '@/store';
import pricesSlice from '@/store/pricesSlice';

const connect = () => {
  console.log('CONNECTION STARTING...');
  const ws = new WebSocket('ws://localhost:7777');
  ws.onmessage = function (e) {
    // console.log('Message:', e.data);
    const data = JSON.parse(e.data);
    store.dispatch(
      pricesSlice.actions.updatePrice({
        id: data.id as string,
        price: data.price
      })
    );
  };

  ws.onclose = function (e) {
    console.log('Socket is closed. Reconnect will be attempted in 3 second.', e.reason);
    setTimeout(function () {
      connect();
    }, 3000);
  };

  ws.onerror = function (err) {
    console.error('Socket encountered error: ', 'Closing socket', err);
    ws.close();
  };
};

export default connect;
