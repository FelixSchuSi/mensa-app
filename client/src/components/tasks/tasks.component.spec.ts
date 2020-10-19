import { httpClient } from '../../http-client';
import { LitElement } from 'lit-element';
import './tasks.component';

describe('app-tasks', () => {
  let element: LitElement;

  // Callback darf nicht async sein, da sonst in der Komponente firstUpdated() aufgerufen wird,
  // bevor der Spy erzeugt wird
  beforeEach(() => {
    element = document.createElement('app-tasks') as LitElement;
    document.body.appendChild(element);
  });

  afterEach(() => {
    element.remove();
  });

  it('should fetch the tasks on first update', async () => {
    spyOn(httpClient, 'get');
    await element.updateComplete;
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });

  it('should render the fetched tasks', async () => {
    const tasks = [
      { id: 1, title: 'Aufgabe 1', status: 'done' },
      { id: 2, title: 'Aufgabe 2', status: 'open' }
    ];

    spyOn(httpClient, 'get').and.returnValue(
      Promise.resolve({
        json() {
          return Promise.resolve({ results: tasks });
        }
      } as Response)
    );

    await element.updateComplete;
    element.requestUpdate(); // da in firstUpdated() das Property tasks asynchron gesetzt wird
    await element.updateComplete;

    const taskElems = element.shadowRoot!.querySelectorAll('app-task');
    expect(taskElems.length).toBe(2);
  });
});
