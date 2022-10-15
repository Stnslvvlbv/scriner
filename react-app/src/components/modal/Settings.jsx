import React from 'react'

const Settings = (props) => {

  const StyleOwerlow = ["Owerlow", "close-modal"];
  StyleOwerlow.push(props.view);
  const StyleModal = ["Modal"]
  return(
    <div className={StyleOwerlow.join(' ')}>
      <div className={StyleModal.join(' ')}>
        <header>
          <h1>Настройки</h1>
        </header>
      <p>{ props.view }</p>
      </div>
    </div>
  )
}

export  {Settings}
