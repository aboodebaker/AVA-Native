import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <View>
   
      {isOpen ? (
        <>
        <Animatable.View
      style={isOpen ? styles.container : styles.containerClosed}
      animation={isOpen ? 'slideInLeft' : 'slideOutLeft'} // Apply the slide animation
      duration={500} // Animation duration in milliseconds
    >
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={47}
                height={47}
                viewBox="0 0 47 47"
                fill="none"
              >
                <Path
                  d="M7.83331 41.125V17.625L23.5 5.875L39.1666 17.625V41.125H27.4166V27.4167H19.5833V41.125H7.83331Z"
                  fill="white"
                />
              </Svg>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={47}
                height={47}
                viewBox="0 0 47 47"
                fill="none"
              >
                <Path
                  d="M9.79165 25.8108V33.6442L23.5 41.125L37.2083 33.6442V25.8108L23.5 33.2917L9.79165 25.8108ZM23.5 5.875L1.95831 17.625L23.5 29.375L41.125 19.7596V33.2917H45.0416V17.625L23.5 5.875Z"
                  fill="white"
                />
              </Svg>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={37}
                height={45}
                viewBox="0 0 37 45"
                fill="none"
              >
                <Path
                  d="M24.6667 16.875H33.1459L24.6667 6.5625V16.875ZM10.7917 3.75H26.2084L35.4584 15V33.75C35.4584 34.7446 35.1335 35.6984 34.5553 36.4016C33.977 37.1049 33.1928 37.5 32.375 37.5H10.7917C9.97394 37.5 9.18968 37.1049 8.61144 36.4016C8.0332 35.6984 7.70835 34.7446 7.70835 33.75V7.5C7.70835 6.50544 8.0332 5.55161 8.61144 4.84835C9.18968 4.14509 9.97394 3.75 10.7917 3.75ZM4.62502 11.25V41.25H32.375V45H4.62502C3.80727 45 3.02301 44.6049 2.44477 43.9016C1.86654 43.1984 1.54169 42.2446 1.54169 41.25V11.25H4.62502Z"
                  fill="white"
                />
              </Svg>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={45}
                viewBox="0 0 45 45"
                fill="none"
              >
                <Path
                  d="M26.25 28.125V31.875C26.25 32.3723 26.0525 32.8492 25.7008 33.2008C25.3492 33.5525 24.8723 33.75 24.375 33.75H11.25L5.625 39.375V20.625C5.625 20.1277 5.82254 19.6508 6.17417 19.2992C6.52581 18.9475 7.00272 18.75 7.5 18.75H11.25M39.375 26.25L33.75 20.625H20.625C20.1277 20.625 19.6508 20.4275 19.2992 20.0758C18.9475 19.7242 18.75 19.2473 18.75 18.75V7.5C18.75 7.00272 18.9475 6.52581 19.2992 6.17417C19.6508 5.82254 20.1277 5.625 20.625 5.625H37.5C37.9973 5.625 38.4742 5.82254 38.8258 6.17417C39.1775 6.52581 39.375 7.00272 39.375 7.5V26.25Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          </TouchableOpacity>
          </Animatable.View>
          {/* <TouchableOpacity onPress={handleClick} style={styles.centerButton}>
           <Icon name="arrow-left" size={30} color="white" />
          </TouchableOpacity> */}
        </>
      ) : (
        <>
          {/* Add the closed sidebar content here */}
          <Animatable.View
      style={isOpen ? styles.container : styles.containerClosed}
      animation={isOpen ? 'slideInLeft' : 'slideOutLeft'} // Apply the slide animation
      duration={500} // Animation duration in milliseconds
    >
       <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={47}
                height={47}
                viewBox="0 0 47 47"
                fill="none"
              >
                <Path
                  d="M7.83331 41.125V17.625L23.5 5.875L39.1666 17.625V41.125H27.4166V27.4167H19.5833V41.125H7.83331Z"
                  fill="white"
                />
              </Svg>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={47}
                height={47}
                viewBox="0 0 47 47"
                fill="none"
              >
                <Path
                  d="M9.79165 25.8108V33.6442L23.5 41.125L37.2083 33.6442V25.8108L23.5 33.2917L9.79165 25.8108ZM23.5 5.875L1.95831 17.625L23.5 29.375L41.125 19.7596V33.2917H45.0416V17.625L23.5 5.875Z"
                  fill="white"
                />
              </Svg>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={37}
                height={45}
                viewBox="0 0 37 45"
                fill="none"
              >
                <Path
                  d="M24.6667 16.875H33.1459L24.6667 6.5625V16.875ZM10.7917 3.75H26.2084L35.4584 15V33.75C35.4584 34.7446 35.1335 35.6984 34.5553 36.4016C33.977 37.1049 33.1928 37.5 32.375 37.5H10.7917C9.97394 37.5 9.18968 37.1049 8.61144 36.4016C8.0332 35.6984 7.70835 34.7446 7.70835 33.75V7.5C7.70835 6.50544 8.0332 5.55161 8.61144 4.84835C9.18968 4.14509 9.97394 3.75 10.7917 3.75ZM4.62502 11.25V41.25H32.375V45H4.62502C3.80727 45 3.02301 44.6049 2.44477 43.9016C1.86654 43.1984 1.54169 42.2446 1.54169 41.25V11.25H4.62502Z"
                  fill="white"
                />
              </Svg>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={45}
                viewBox="0 0 45 45"
                fill="none"
              >
                <Path
                  d="M26.25 28.125V31.875C26.25 32.3723 26.0525 32.8492 25.7008 33.2008C25.3492 33.5525 24.8723 33.75 24.375 33.75H11.25L5.625 39.375V20.625C5.625 20.1277 5.82254 19.6508 6.17417 19.2992C6.52581 18.9475 7.00272 18.75 7.5 18.75H11.25M39.375 26.25L33.75 20.625H20.625C20.1277 20.625 19.6508 20.4275 19.2992 20.0758C18.9475 19.7242 18.75 19.2473 18.75 18.75V7.5C18.75 7.00272 18.9475 6.52581 19.2992 6.17417C19.6508 5.82254 20.1277 5.625 20.625 5.625H37.5C37.9973 5.625 38.4742 5.82254 38.8258 6.17417C39.1775 6.52581 39.375 7.00272 39.375 7.5V26.25Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          </TouchableOpacity>
      </Animatable.View>  
          {/* <TouchableOpacity onPress={handleClick} style={styles.centerButtonClosed}>
            <Icon name="arrow-right" size={30} color="blue" />
          </TouchableOpacity> */}
        
        </>
      )}

      <TouchableOpacity
        onPress={handleClick}
        style={[
          styles.centerButton,
          !isOpen && styles.centerButtonClosed, // Apply closed button style
        ]}
      >
        <Icon name={isOpen ? 'arrow-left' : 'arrow-right'} size={30} color={ 'blue'} />
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: '10%',
    borderRadius: '50%',
  },
  containerClosed: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: '50%',
  },
  iconContainer: {
    marginVertical: 10,
  },
  centerButtonClosed: {

    position: 'absolute',
    top: '50%', // You can use percentage values in React Native
    left: '50%', // You can use percentage values in React Native
    transform: [{ translateX: -50 }, { translateY: -50 }],
    
  },
  centerButtonClosed: {
    alignItems: 'center',
    
    
  },
});

export default Sidebar;