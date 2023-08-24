import React from 'react';
import {Link} from "react-router-dom";
import { Layout, Image, Typography,Button,Avatar } from "antd";
import Logo from "../../images/Instaverse.png";
import styles from './styles';
const {Title}=Typography;
const {Header}=Layout;
export default function AppBar() {
    const user=null;

  return (
    <Header style={styles.header}>
        <Link to="/"> 
               <div style={styles.homeLink}>
                <Image style={styles.image}  preview={false} src={Logo} width={45}/>
                <Title style={styles.title}>Instaverse</Title>
        </div>
        </Link>
        {!user?(
            <Link to="/authform">
            <Button htmlType='button' style={styles.login}>
                Log In
            </Button>
            </Link>
        ):(
            <div style={styles.userInfo}>
                <Avatar style={styles.avatar} alt="username" size="large">
                    U
                </Avatar>
                <Title style={styles.title} level={4}>
                    John Doe
                </Title>
                <Button htmlType='button'>
                    Log Out 
                </Button>
            </div>
        )}
    </Header>
  )
}
