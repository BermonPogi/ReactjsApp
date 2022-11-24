import styles from './motion_detector.module.css';
const motion_detector = () => {
  return (

    <div>
        <div className={styles.wrapper}>
        <div className={styles.sidebar}>
        <h2>MOTION DETECTOR</h2>
        <ul>
          
            <li><a href="#"><i class="fas fa-address-card"></i>Dashboard</a></li>
         
        </ul> 
       {/* <div className={styles.social_media}>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
      </div> */}

    </div>

    <div className={styles.main_content}>
    <div className={styles.header}>Welcome to Motion Detector App <li><a href="#"><i class="fas fa-address-card"></i>Dashboard</a></li></div>
        
        <div className={styles.info}>
         </div>
        
         <div className={styles.container}>
             <p1>View Image</p1>
         <div className={styles.wrapper}>
             
            <div className={styles.image}>
               <img src="" alt=""/>
            </div> <div className={styles.text}>
               <p1></p1>
            </div>
            <div className={styles.content}>
               <div className={styles.icon}>
                  <i className="fas fa-cloud-upload-alt"></i>
               </div>
               <div className={styles.text}>
                   <p>Date and Time</p>
                  <p >October 31, 2022 - 03:39 45 se</p>
                  <button className={styles.custom_btn}>Delete Image</button>
        
        <button className={styles.custom_btn2}>View Image</button>
               </div>
            </div>
            <div id="cancel_btn">
               <i class="fas fa-times"></i>
            </div>
            <div className={styles.file_name}>
               File name here
            </div>
         </div>
      
       
      </div>
      <div className={styles.table}>
        <div className={styles.header}>
            <table>
            <th>ID</th>
            <th>Datetime</th>
             <tr>
            <td>1</td>
            <td>October 29, 2022 - 01:18 45 se</td>
        

        </tr>
        <tr>
            <td>2</td>
            <td>October 29, 2022 - 05:18 45 se</td>
         
        </tr>
        <tr>
            <td>3</td>
            <td>October 31, 2022 - 03:39 45 se</td>

        </tr>
            </table>

         
        </div>
       

    </div>

      </div>

    </div>
    <footer className={styles.footer_distributed}>

    <img src="./team1.png" width="100%" alt="" />
   
  </footer>
            
    </div>

);
};

export default motion_detector;