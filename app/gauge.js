const el = (id) => {
  return document.getElementById(id);
};



const init = (id, event) => {
  var el = document.getElementById(id);
  const e = el.addEventListener ( event , (event) => {
    return event;
  });
  return e;
};

const update = (id , value ) => {
  var el = document.getElementById( id );
  el.setAttribute('default',value);
  el.setAttribute('enabled' , 'true' );
  return el;
};

module.exports = { el , init , update };