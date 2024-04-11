import React,{useRef,useState} from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';
import { CgMail } from 'react-icons/cg';
import emailjs from '@emailjs/browser';
import Navbar from '../Components/Navbar'


export default function Contact() {
  const form = useRef();
  
    const [formData, setFormData] = useState({
      sender_name: 'jenny',
    email: '2020cs117@gmail.com',
    msg: 'whats upp',
    });
  
   

    const handleChange = (e) => {
  const { name, value } = e.target;
  console.log(`Updating state for ${name} with value ${value}`);
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

  
    const sendEmail = (e) => {
      e.preventDefault();
  
      const params = {
        from_name: formData.name,
        Email_id: formData.email,
        message: formData.msg,
      };
  
      emailjs
        .send('service_ii5ewnm', 'template_5niqwg2', params, 'PFYudbMIh3M4B335E')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
      };


  // const sendEmail = (e) => {
  //   var params={
  //     from_name : document.getElemantbid('name').value,
  //     Email_id : document.getElemantbid('email').value,
  //     message : document.getElemantbid('msg').value,
  //    }
  //   e.preventDefault();

  //   emailjs.sendForm('service_ii5ewnm', 'template_5niqwg2', form.current, 'PFYudbMIh3M4B335E')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <> 
    <Navbar />
    <div className='antialiased   mb-6 pt-12 pl-6 w-88 ml-14 bg-gray-100'>
      <div className='flex px- w-full min-h-screen justify-center items-center'>
        <div className=' flex flex-col md:flex-row  md:space-x-6 space-y-6 md:space-y-0 bg-cyan-800 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white'>
          <div className='flex flex-col space-y-8 justify-between'>
            <div >
              <h1 className='font-bold  text-4xl tracking-wide'> Let's Talk </h1>

              <p className='pt-2 text-cyan-100 text-5m'>You can add detail further on</p>
               <div className='inline-flex space-x-2 items-center'>
              <CgMail className='text-teal-300 text-xl' />          <span>
                xyz@gmail.com
              </span>
            </div>  </div>
            <div><p> you can add some text here ,later on</p>  </div>

            <div className='flex flex-col text-lg'>
  <p className='font-bold mb-2'>Connect with me</p>
  <div className='flex space-x-4 text-lg'>
    <a href='#'><BsInstagram /></a>
    <a href='#'><FaGithub /></a>
    <a href='#'><BsLinkedin /></a>
    <a href='#'><BsTwitter /></a>
  </div>
</div>

          </div>
          <div>
            <div className='bg-white rounded-xl shadow-lg p-12  text-black md:w-80 mr-4 ml-28'>
              <form id='myForm' ref={form}action=" " className='flex flex-col space-y-4'>
                <div>
                  <label htmlFor="" className='text-sm'>Enter your name</label>
                  <input id='sender_name' name="name"
                    placeholder='Your Name'
                      onChange={handleChange}
                    className='ring-1 ring-gray-300 w-full rounded-md px-4 py2 mt-2 outline-none
          focus:ring-2 focus:ring-teal-300'></input>
                </div>
                <div>
                  <label for="" className='text-sm'>Enter your email</label>
                  <input id ='email'name="email"
                    placeholder='Your Email Address'
                      onChange={handleChange}
                    className='ring-1 ring-gray-300 w-full rounded-md px-4 py2 mt-2 outline-none
          focus:ring-2 focus:ring-teal-300'></input>
                </div>
                <div>
                  <label for="" className='text-sm'>Message</label>
                  <textarea id='msg' name="msg"
                    placeholder='Your Message '
                      onChange={handleChange}
                    className='ring-1 ring-gray-300 w-full h-44 rounded-md px-4 py2 mt-2 outline-none
          focus:ring-2 focus:ring-teal-300'></textarea>
                </div>
                <button
  className='inline-block self-end w-33 bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'
  onClick={sendEmail}
>
  Send Message
</button>
    
                 </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
