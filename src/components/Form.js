import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label>
          Nome:
          <input type="text" data-testid="name-input" />
        </label>
        <label>
          Descrição
          <input type="textarea" data-testid="description-input" />
        </label>
        <label>
          Attr1
          <input type="number" data-testid="attr1-input" />
        </label>
        <label>
          Attr2
          <input type="number" data-testid="attr2-input" />
        </label>
        <label>
          Attr3
          <input type="number" data-testid="attr3-input" />
        </label>
        <label>
          Imagem:
          <input type="text" data-testid="image-input" />
        </label>
        <label>
          Raridade
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label>
          Super Trybe Tryunfo
          <input typeof="checkbox" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
