import React from 'react'
import Carte from '../Composants-reutil/Carte'
import '../Composants/Assets/Css/Cartes.css'

const Cartes = () => {
  return (
    <div className='container my-5'>
      <div class="row">
        <div class="offset-sm-2 col-sm-4 mb-4 mb-sm-3">
            <Carte
                title="Titre de la carte"
                paragraph="Get started fast with installation theme setup instructions"
                iconClass="fa ico fa-gear"
            />
        </div>
        <div class="col-sm-4 mb-4 mb-sm-3 ">
            <Carte
                    title="User Account"
                    paragraph="Get started fast with installation theme setup instructions"
                    iconClass="fa ico fa-user"
            />
        </div>
        <div class="offset-sm-2 col-sm-4 mb-4 mb-sm-3 ">
            <Carte
                    title="Product Features"
                    paragraph="Get started fast with installation theme setup instructions"
                    iconClass="fa ico fa-sliders"
            />
        </div>
        <div class="col-sm-4 mb-4 mb-sm-3 ">
            <Carte
                    title="Customization options"
                    paragraph="Get started fast with installation theme setup instructions"
                    iconClass="fa ico fa-code"
            />
        </div>
        <div class="offset-sm-2 col-sm-4 mb-4 mb-sm-3 ">
            <Carte
                    title="Payement Gateways"
                    paragraph="Get started fast with installation theme setup instructions"
                    iconClass="fa ico fa-credit-card"
            />
        </div>
        <div class="col-sm-4 mb-4 mb-sm-3 ">
            <Carte
                    title="Security Option"
                    paragraph="Get started fast with installation theme setup instructions"
                    iconClass="fa ico fa-lock"
            />
        </div>
        <div class="offset-sm-2 col-sm-4 mb-4 mb-sm-3 ">
            <Carte
                    title="Digital Downloads"
                    paragraph="Get started fast with installation theme setup instructions"
                    iconClass="fa ico fa-download"
            />
        </div>
        <div class="col-sm-4 mb-4 mb-sm-3 ">
            <Carte
                    title="Email Marketing"
                    paragraph="Get started fast with installation theme setup instructions"
                    iconClass="fa ico fa-envelope"
            />
        </div>
        </div>
    </div>
  )
}

export default Cartes
