import {test} from 'ava';
import {
  AttachLayout
} from 'stepping';

test('should enable get first node position', t => {
  let layout = new AttachLayout();
  let parentNode = { x: 0, y: 0, width: 400, height: 300};
  let nodes = layout.calculateNodes(parentNode, [{ id: 0, name: '库存已增加'}]);

  t.deepEqual(nodes, [{ id: 0, name: '库存已增加', position: { x: 280, y: 360}}])
});
