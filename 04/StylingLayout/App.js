/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component} from 'react';
import {  Platform, StyleSheet, Text, View} from 'react-native';
//Kod yazdıkça, yorum etiketleri ile kodları çalıştıracağım,
//eğer bir kod bloğunu çalıştırmak isterseniz, bir bölümü yorum etiketleri ile kapatıp diğer bölümü açın.
//CTRL+Ö tuşu işinizi kolaylaştırır.

type Props = {};
//Örnek 1.1
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ color: '#fff', fontSize: 22 }}>Merhaba React Native Dünyası</Text>
//       </View>
//     );
//   }
// }

//Örnek 1.2
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={viewStyles}>
//       <Text style={textStyles}>Merhaba React Native Dünyası 2</Text>
//       </View>
//     );
//   }
// }

//Örnek 1.3
// export default class App extends Component<Props> {
//   render() {
//       return bilesenler()
//   }
// }

// const bilesenler = () => (
//   <View style={viewStyles}>
//   <Text style={textStyles}>Merhaba React Native Dünyası 3</Text>
//   </View>);
// const viewStyles = { backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' };
// const textStyles = { color: '#fff', fontSize: 22 };

//Örnek 1.4
// import {TouchableHighlight} from 'react-native';
// export default class App extends Component<Props> {
//     render() {
//         return bilesenler()
//     }
//   }

//   const bilesenler = () => (
//     <View style={viewStyles}>
//     <TouchableHighlight style={[btn, btnPrimary]}>
//     {/* <TouchableHighlight style={[Object.assign(btn, btnPrimary)]}> */}
//     <Text>Submit</Text>
//     </TouchableHighlight>
//     </View>);
//   const viewStyles = { flex: 1, justifyContent: 'center', alignItems: 'center' };
//   const btn = { borderStyle: 'solid', borderColor: '#d5d5d5', borderWidth: 1,
//     backgroundColor: '#eee', borderRadius: 3, padding: 3,paddingLeft: 5,paddingRight: 5};
//   const btnPrimary = { backgroundColor: '#60b044', borderColor: '#5ca941'};


//Örnek 1.5
// import {TouchableHighlight} from 'react-native';
// export default class App extends Component<Props> {
//     render() {
//         return bilesenler()
//     }
//   }

//   const bilesenler = () => (
//     <View style={styles.viewStyles}>
//     <TouchableHighlight style={[styles.btn, styles.btnPrimary]}>
//     <Text>Submit</Text>
//     </TouchableHighlight>
//     </View>);

//   const styles = StyleSheet.create({
//     viewStyles: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//     btn: { borderStyle: 'solid', borderColor: '#d5d5d5', borderWidth: 1,
//     backgroundColor: '#eee', borderRadius: 3, padding: 3,paddingLeft: 5,paddingRight: 5},
//     btnPrimary: { backgroundColor: '#60b044', borderColor: '#5ca941'},
//   });

//Örnek 1.6
// import {TouchableHighlight} from 'react-native';
// export default class App extends Component < Props > {
//   render() {
//     return bilesenler()
//   }
// }

// const bilesenler = () => ( 
//   <View style = {viewStyles}>
//   <TouchableHighlight style={[buttonStyles.core, buttonStyles.spacer]}>
//   <Text> Geçerli Normal </Text> 
//   </TouchableHighlight> 
//   <TouchableHighlight style={[buttonStyles.core, buttonStyles.hairlineBorder, buttonStyles.spacer]}>
//   <Text> Geçerli Hairline </Text> 
//   </TouchableHighlight> 
//   <TouchableHighlight 
//   style={[buttonStyles.core, buttonStyles.primary, buttonStyles.spacer]}>
//   <Text> Primary Normal </Text> 
//   </TouchableHighlight> 
//   <TouchableHighlight style={[buttonStyles.core, buttonStyles.primary, buttonStyles.hairlineBorder]}>
//   <Text> Primary Hairline </Text> 
//   </TouchableHighlight> 
//   </View>
// );

// const viewStyles = {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center'
// };
// const buttonStyles = StyleSheet.create({
//   core: {
//     borderStyle: 'solid',
//     borderColor: '#d5d5d5',
//     borderWidth: 1,
//     backgroundColor: '#eee',
//     borderRadius: 3,
//     padding: 3,
//     paddingLeft: 5,
//     paddingRight: 5
//   },
//   primary: {
//     backgroundColor: '#60b044',
//     borderColor: '#355f27'
//   },
//   hairlineBorder: {
//     borderWidth: StyleSheet.hairlineWidth
//   },
//   spacer: {
//     marginBottom: 10
//   }
// });

//Örnek 2.1
// export default class App extends Component < Props > {
//   render() {
//     return FlexBoxLayout()    
//   }
// }

// const FlexBoxLayout = () => (
//   <View style={styles.container}>
//   <View style={styles.item} />
//   <View style={styles.item} />
//   <View style={styles.item} />
//   </View>
//   );
  
//   const styles = StyleSheet.create({ container: {
//     flex: 1, flexDirection: 'column', 
//     justifyContent: 'flex-start', alignItems: 'flex-start'},
//     item: {
//     backgroundColor: 'yellow', borderWidth: 0,
//     borderColor: 'green', height: 150, width: 150}
//     });

//Örnek 2.2
// export default class App extends Component < Props > {
//   render() {
//     return FlexBoxLayout()    
//   }
// }

// const FlexBoxLayout = () => (
//   <View style={styles.container}>
//   <View style={styles.item1} />
//   <View style={styles.item2} />
//   <View style={styles.item3} />
//   </View>
//   );
  
//   const styles = StyleSheet.create({ 
//     container: {flex: 1, flexDirection: 'column'},
//     item1: {flex: 1, backgroundColor: 'powderblue'},
//     item2: {flex: 5, backgroundColor: 'skyblue'},
//     item3: {flex: 2, backgroundColor: 'steelblue'}
//     });

//Örnek 3.1
// export default class App extends Component < Props > {
//   render() {
//     return TextExample()    
//   }
// }

// const TextExample = () => (
//   <View style={styles.container}>
//   <Text style={styles.headline}>
//   Merhaba <Text style={styles.bold}>React</Text> Native {'\n'}
//   <Text style={styles.subheader}>Çok <Text style={styles.bold}>güzellll!</Text></Text>
//   </Text>
//   <Text style={styles.text}>
//   Styling <Text style={styles.bold}>metni</Text> iç içe <Text style={styles.italic}>React Native.</Text>
//   </Text>
//   <Text style={[styles.text, styles.moreLineHeight, styles.right]}>
//   Sağa yaslama ve daha fazlası... <Text style={styles.code}>Örnek</Text>lere devam.
//   </Text>
//   <Text style={[styles.text, styles.center, styles.thin]}> Ortalama ve ince metin... </Text>
//   </View>
//   );
  
//   const styles = StyleSheet.create({
//     container: {flex:1, flexDirection: 'column', 
//     justifyContent: 'center'},
//     headline: {fontFamily: 'Georgia', fontSize: 20},
//     subheader: { color: 'blue' },
//     bold: { fontWeight: 'bold' },
//     thin: { fontWeight: '200'},
//     italic: { fontStyle: 'italic' },
//     moreLineHeight: { lineHeight: 40 },
//     right: { textAlign: 'right'},
//     center: { textAlign: 'center'},
//     code: { fontFamily: 'Courier'}
//     });
  
//Örnek: 3.2
// import PropTypes from 'prop-types';
// export default class App extends Component < Props > {
//       render() {
//         return TextExample()    
//       }
//     }
    
// const TextExample = () => (
//   <View>
//     <Headline>Bu başlık</Headline>
//     <BodyCopy>Bir metin <Bold>kalın</Bold> metin.</BodyCopy>
//     {/* Örnek 3.2.1. */}
//     <Bold2 onPress={() => console.log('Tıklandı.!')} numberOfLines={2} style={bold2styles.green}>
//     Bir başka metin, bu metin üzerine tıkladığınızda console bölümüne tıklandı yazar.
//     </Bold2>
//   </View>
// );

// const Bold = ({ children }) => <Text style={boldTextStyles.text}>{children}</Text>;
// Bold.propTypes = {  children: PropTypes.node.isRequired};
// const boldTextStyles = StyleSheet.create({ text: { fontWeight: '600'}});
// const BodyCopy = ({ children }) => <Text style={bodyCopyStyles.text}>{children}</Text>;
// BodyCopy.propTypes = { children: PropTypes.node.isRequired };
// const bodyCopyStyles = StyleSheet.create({ text: { fontFamily: 'Helvetica', fontSize: 18, color: '#333'}});
// const Headline = ({ children }) => <Bold><Text style={headlineStyles.text}>{children}</Text></Bold>;
// Headline.propTypes = { children: PropTypes.node.isRequired};
// const headlineStyles = StyleSheet.create({ text: { fontFamily: 'Optima', fontSize: 30, color: '#333'}});
// //Örnek 3.2.1
// const Bold2 = ({ children, style, ...otherProps }) => <Text style={[boldTextStyles.text, style]} {...otherProps}>{children}</Text>;
// Bold2.propTypes = {children: PropTypes.node.isRequired, style: Text.propTypes.style};
// const bold2styles = StyleSheet.create({ green: {color: 'green'}});

// import {Image} from 'react-native';
// export default class App extends Component < Props > {
//       render() {
//         return(
//           <Image source={{ uri: 'https://dijivol.com/image/cache/catalog/vol-TUR1006_9x6-300x250.jpg' }}
//           style={{ width: 350, height: 150 }}/>
//         );   
//       }
//     }

    
    // <Image source={require('./img/resim_local01.jpg')}>
    //       <View>
          
    //       </View>
    // </Image>
    
//Örnek 1
export default class App extends Component < Props > {
  constructor(props) {
    super(props);
    this.state = { width: 0,
    height: 0
    };  
  this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(event) {
    const { width, height } = event.nativeEvent.layout; this.setState({ width, height });
  }
       
  render() {
    return(
      <View onLayout={this.onLayoutChange} style={styles.container}>
      <Text style={styles.text}>Genişlik: {this.state.width}, Yükseklik:{this.state.height}</Text>
      </View>
    );   
    }
  }

  const styles = StyleSheet.create({ 
    container: {flex: 1,alignItems: 'center', justifyContent: 'center'},
    text: { fontSize: 18}
    });
    