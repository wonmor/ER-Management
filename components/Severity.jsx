//selecting the emergency type to match with the corresponding doctor

import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';


// const Severity = () => {
//   const [defaultRating, setdefaultRating] = useState(2)
//   const [maxRating, setmaxRating] = useState([1,2,3,4,5])

//   const starImgFilled
//   const starImgCorner

//   const CustomRatingBar = () => {
//     return (
//       <View style={styles.customRatingBarStyle}>

//       </View>
//     )
//   }
//     return (
//       <View style={styles.customRatingBarStyle}>
//         {
//           maxRating.map((itme, key) => {
//             return (
//               <TouchableOpacity
//               activeOpacity={0.7}
//               key={itme}
//               onPress={() => setdefaultRating(item)}
//               >
//                 <Image
//                 style={styles.starImgStyle}
//                 source={
//                   item <= defaultRating
//                   ? {uri: starImgFilled}
//                   : {uri: starImgCorner}
//                 }
//                 />
//               </TouchableOpacity>
//             )
//           })
//         }

      
//     </View>
//     )


//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.textStyle}> Severity rating </Text>
//       <CustomRatingBar/>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     justifyContent: 'center'
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontSize: 23
//   },
//   customRatingBarStyle: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     marginTop: 30
//   },
// });
// export default Severity;

import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [rating, setRating] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Tap to rate</Text>
        <View style={styles.stars}>
          <TouchableOpacity onPress={() => setRating(1)}>
            <Image source={rating >= 1 ? require('../assets/filledCircle.png') : require('../assets/unfilledCircle.png')} style={styles.star} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(2)}>
            <Image source={rating >= 2 ? require('../assets/filledCircle.png') : require('../assets/unfilledCircle.png')} style={styles.star} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(3)}>
            <Image source={rating >= 3 ? require('../assets/filledCircle.png') : require('../assets/unfilledCircle.png')} style={styles.star} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(4)}>
            <Image source={rating >= 4 ? require('../assets/filledCircle.png') : require('../assets/unfilledCircle.png')} style={styles.star} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating(5)}>
            <Image source={rating >= 5 ? require('../assets/filledCircle.png') : require('../assets/unfilledCircle.png')} style={styles.star} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "#fff",
    marginBottom: 20,
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  star: {
    width: 32,
    height: 32,
  },
});