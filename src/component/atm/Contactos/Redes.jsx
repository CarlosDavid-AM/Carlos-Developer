import Linkedin from "../../../img/svg/linkedin.svg"
import Facebook from "../../../img/svg/facebook.svg"
import Whatsapp from "../../../img/svg/whatsapp.svg"

const Redes = () => {
  return(
    <div className="mt-9">
      <h2 className="font-medium text-xl">
        Redes sociales
      </h2>
      <div className="flex gap-x-9 justify-center mt-6">
        <a href="https://www.linkedin.com/in/carlos-david-apolaya-mendoza-a30122219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BavHozhMVRIyBKbLODyZK3A%3D%3D"
        target="_blank">
          <img src={Linkedin} className="h-6" alt="linkedin" />
          </a>
        <a href="https://www.facebook.com/david.apolaya.526/" target="_blank">
          <img src={Facebook} className="h-7" alt="facebook" />
        </a>
        <a href="tel:933376104">
          <img src={Whatsapp} className="h-8" alt="whatsapp" />
        </a>
      </div>
    </div>
  )
}

export default Redes