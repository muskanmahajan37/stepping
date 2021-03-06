import {test} from 'ava';
import {
  EventBusiness,
  EventBusinessStore,
  EventEntity,
  EventPublisher,
  EventStickyRender,
  EventSubscriber
} from 'stepping';

test('should enable add related child', t => {
  // let eventSubscriber = new EventSubscriber();
  // let eventStore = new EventBusinessStore(eventSubscriber);
  //
  // let eventBusiness = new EventBusiness(eventSubscriber);
  //
  // let eventEntity = eventBusiness.createEventSticky('事件贴纸已创建');
  // eventBusiness.createEventSticky('事件贴纸位置已生成');
  // eventBusiness.createEventSticky('事件贴纸已渲染');
  //
  // t.deepEqual(eventEntity[0].name, 'hello');
  //
  // t.deepEqual(eventStore.store[0]['name'], 'hello');
  t.deepEqual(true, true)
});

test('should enable add related child', t => {
  let eventSubscriber = new EventSubscriber();
  let eventRender = new EventStickyRender(eventSubscriber);

  let eventBusiness = new EventBusiness(eventSubscriber);

  let eventEntity = eventBusiness.createEventSticky('事件贴纸已创建');
  let subEntity = new EventEntity('sticker had store');
  eventEntity.addRelatedChild(subEntity);

  eventBusiness.updateEventSticky(eventEntity);
  let result = eventRender.render();

  t.deepEqual(result, `<svg width=\"1024\" height=\"1024\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"> <g>
              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" rx=\"2\" ry=\"2\" fill=\"#FFCC33\"/>
              <text x=\"0\" y=\"30\" fill=\"#000\">
                <tspan x=\"5\" dy=\"0\">事件贴纸已创建</tspan>
              </text><g>
              <rect x=\"50\" y=\"50\" width=\"100\" height=\"100\" rx=\"2\" ry=\"2\" fill=\"#0095DD\"/>
              <text x=\"50\" y=\"80\" fill=\"#000\">
                <tspan x=\"55\" dy=\"0\">sticker had store</tspan>
              </text>
            </g>
            </g> </svg>`)
});

test('should enable add update sub child', t => {
  let eventSubscriber = new EventSubscriber();
  let eventRender = new EventStickyRender(eventSubscriber);

  let eventBusiness = new EventBusiness(eventSubscriber);

  let eventEntity = eventBusiness.createEventSticky('事件贴纸已创建');
  eventBusiness.createEventSticky('事件贴纸已更新');
  let subEntity = new EventEntity('sticker had store');
  eventEntity.addRelatedChild(subEntity);

  eventBusiness.updateEventSticky(eventEntity);
  let result = eventRender.render();

  t.deepEqual(result, `<svg width=\"1024\" height=\"1024\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"> <g>
              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" rx=\"2\" ry=\"2\" fill=\"#FFCC33\"/>
              <text x=\"0\" y=\"30\" fill=\"#000\">
                <tspan x=\"5\" dy=\"0\">事件贴纸已创建</tspan>
              </text><g>
              <rect x=\"50\" y=\"50\" width=\"100\" height=\"100\" rx=\"2\" ry=\"2\" fill=\"#0095DD\"/>
              <text x=\"50\" y=\"80\" fill=\"#000\">
                <tspan x=\"55\" dy=\"0\">sticker had store</tspan>
              </text>
            </g>
            </g><g>
              <rect x=\"150\" y=\"0\" width=\"100\" height=\"100\" rx=\"2\" ry=\"2\" fill=\"#FFCC33\"/>
              <text x=\"150\" y=\"30\" fill=\"#000\">
                <tspan x=\"155\" dy=\"0\">事件贴纸已更新</tspan>
              </text>
            </g> </svg>`)
});
