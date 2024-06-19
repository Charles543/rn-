import React from 'react';
import { View, Text, StyleSheet , Image, TextInput,FlatList, TouchableOpacity } from 'react-native';


const colors = [
    '#267ae0',
    '#04072e',
    '#000003',
    '#871774',
    '#28631b',
    '#7bad1d',
    '#66530c',
    '#0b696b',
]


const featuredJobs = [
    {
        id: 1,
        title: 'Software Engineer',
        location: 'Ghana, Accra',
        company:'Facebook',
        salary: '$180,000',
        image: require('../assets/facebook.png'),
    },

    {
        id: 2,
        title: 'Software Engineer',
        location: 'Japan',
        company:'Google',
        salary: '$100,000',
        image: require('../assets/google.png'),
    },

    {
        id: 3,
        title: 'Solutions architect',
        location: 'USA',
        company:'NASA',
        salary: '$157,768',
        image: require('../assets/nasa.png'),
    },

    {
        id: 4,
        title: 'Product manager',
        location: 'Spain',
        company:'Amazon',
        salary: '$129,814',
        image: require('../assets/amazon.png'),
    },

    {
        id: 5,
        title: 'MIS manager',
        location: 'France',
        company:'Apple',
        salary: '$124,774',
        image: require('../assets/apple.png'),
    },

    {
        id: 6,
        title: 'DevOps engineer',
        location: 'Singapore',
        company:'Samsung',
        salary: '$124,071',
        image: require('../assets/samsung.png'),
    },

    {
        id: 7,
        title: 'Software developer',
        location: 'USA',
        company:'Microsoft',
        salary: '$123,067',
        image: require('../assets/microsoft.png'),
    },

    {
        id: 8,
        title: 'Project manager',
        location: 'Singapore',
        company:'IBM',
        salary: '$121,110',
        image: require('../assets/ibm.png'),
    },
]

const popularJobs = [
    {
        id: 11,
        image: require('../assets/burger-king.png'),
        title: 'Jr Executive',
        location: 'Los Angelos,US',
        company:'Facebook',
        salary: '$200,000/y',
    },

    {
        id: 12,
        image: require('../assets/beats.png'),
        title: 'Product Manager',
        location: 'Florida,US',
        company:'Beats',
        salary: '$190,000/y',
    },

    {
        id: 13,
        image: require('../assets/facebook.png'),
        title: 'Product Manager',
        location: 'Florida,US',
        company:'Facebook',
        salary: '$120,000/y',
    },

    {
        id: 14,
        image: require('../assets/apple.png'),
        title: 'Software Engineer',
        location: 'Tokyo,Japan',
        company:'Apple',
        salary: '$110,000/y',
    },

    {
        id: 15,
        image: require('../assets/google.png'),
        title: 'Software Engineer',
        location: 'Paris,France',
        company:'Google',
        salary: '$180,000/y',
    },

    {
        id: 16,
        image: require('../assets/nasa.png'),
        title: 'DevOps engineer',
        location: 'Ghana, Accra',
        company:'Nasa',
        salary: '$180,000/y',
    },

    {
        id: 17,
        image: require('../assets/tesla.png'),
        title: 'MIS manager',
        location: 'Madrid,Spain',
        company:'Facebook',
        salary: '$140,000/y',
    },

    {
        id: 18,
        image: require('../assets/samsung.png'),
        title: 'Systems engineer',
        location: 'Ghana, Accra',
        company:'Samsung',
        salary: '$130,000/y',
    },

    {
        id: 19,
        image: require('../assets/microsoft.png'),
        title: 'Systems engineer',
        location: 'Ghana, Accra',
        company:'Facebook',
        salary: '$170,000/y',
    },

]

const HomeScreen = ({route}) => {
    const {name, email} = route.params;

    const renderItem =({item ,index}) =>(
        <TouchableOpacity style={[styles.featuredJobsCards,{backgroundColor: colors[index % featuredJobs.length ]} ]}>
            <View style={styles.upperCardSsection}>
                <Image source={item.image} style={styles.featuredJobsIcons} />
                <View style={styles.upperCardSsectionTexts}>
                    <Text style={styles.featuredJobsTitle}>{item.title}</Text>
                    <Text style={styles.companyText}>{item.company}</Text>
                </View>
            </View>

            <View style={styles.lowerCardSsection}>
                <Text style={styles.salaryText}>{item.salary}</Text>
                <Text style={styles.locationText}>{item.location}</Text>
            </View>
            
            
        </TouchableOpacity>
    );

    const renderItem2 =({item, index}) =>(
        <TouchableOpacity style={[styles.popularJobsCards, {marginBottom: index === popularJobs.length - 1 ? 0 : 2}]}>
            <View style={styles.popularJobscontainer}>
                <Image source={item.image} style={styles.popularJobsJobsIcons} />
                <View>

                    <View style={styles.upperPopularJobsTexts}>
                        <Text style={styles.popularJobsTitle}>{item.title}</Text>
                        <Text style={styles.popularJobssalaryText}>{item.salary}</Text>
                    </View>

                    <View style={styles.lowerPopularJobsSsection}>
                        <Text style={styles.popularJobsCompanyText}>{item.company}</Text>
                        <Text style={styles.popularJobsLocationText}>{item.location}</Text>
                    </View>

                </View>
                

            </View>
            
        </TouchableOpacity>

    );


    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
                <View>
                    <Image source={require('../assets/Ellipse.png')} style={styles.logo} />
                    {/* <Image source={require('../assets/Ellipse 767.png')} style={styles.redlogo} /> */}
                </View>
            </View>

            <View style={styles.searchSection}> 
                <TextInput placeholder='Search a Job or Position' placeholderTextColor='#9c9598'/>
                <View >
                    <Image source={require('../assets/filter.png')} style={styles.filterIcon} />
                </View>
            </View>

            <View>
                <Text style={styles.featuredJobs}>Featured Jobs</Text>
                    <FlatList
                        data={featuredJobs}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        // contentContainerStyle={styles.contentContainer}
                    />
            </View>

            <View>
                <Text style={styles.popularJobsJobs}>Popular Jobs</Text>
                    <FlatList
                        data={popularJobs}
                        renderItem={renderItem2}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        // contentContainerStyle={styles.contentContainer}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: 89,
        paddingHorizontal: 30,
    },

    topSection: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        marginBottom:20,
    },
    userName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0D0D26',
    },
    email: {
        fontSize: 20,
        fontWeight: 'light',
        color: '#95989c',
    },

    logo: {
        width: 50,
        height: 50
    },

    searchSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        marginBottom:20,
    },


    search:{
        height: 52,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#F2F2F3',
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        width: 280,
    },

    filterIcon: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor:'F2F2F3',
        height:26,
        width:26,
        borderRadius: 12,
    },
    featuredJobs: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0D0D26',
        marginTop: 20,
        marginBottom: 20,
        width: 280,
    },

    featuredJobsCards: {
        width:280,
        height:186,
        alignSelf:'center',
        marginTop:10,
        marginBottom:10,
        marginRight:20,
        borderRadius:24,
        paddingVertical: 20,
        backgroundColor:'#bbb',
        paddingHorizontal:20
    },
    upperCardSsection: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginBottom:20,
        marginRight:10,
    },
    featuredJobsIcons: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor:'#fff',
        margin:-1,
    },
    upperCardSsectionTexts:{
        paddingHorizontal:40,
        marginLeft:-20,
    },
    featuredJobsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    companyText: {
        fontSize: 20,
        fontWeight: 'light',
        color: '#fff',
    },
    salaryText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    locationText: {
        fontSize: 15,
        fontWeight: 'light',
        color: '#fff',
    },
    lowerCardSsection: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:60,
        marginBottom:20,
    },

    popularJobsJobs: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0D0D26',
        marginTop: 20,
        marginBottom: 20,
        width: 280,
    },
    popularJobscontainer:{
        flexDirection:'row',
        marginBottom:30,
    },
    popularJobsCards: {
        width:327,
        height:74,
        marginTop:10,
        marginBottom:50,
        marginLeft:8,
        borderRadius:20,
        paddingVertical: 20,
        paddingHorizontal:20
    },
    popularJobsJobsIcons: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor:'#fff',
        margin:-1,
    },

    upperPopularJobsTexts:{
        flexDirection:'row',
        paddingHorizontal:10,
        // justifyContent:'space-between',
    },

    lowerPopularJobsSsection:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:10,
        paddingVertical:10,

    }, 
    popularJobsTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0D0D26',
        paddingHorizontal:20,
        
    }, 
    popularJobssalaryText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0D0D26',
        paddingHorizontal:20,
    },  
    popularJobsCompanyText: {
        fontSize: 15,
        fontWeight: 'light',
        color: '#95989c',
    
    },  
    popularJobsLocationText: {
        fontSize: 15,
        fontWeight: 'light',
        color: '#95989c',
        paddingHorizontal:15,
    },



})

export default HomeScreen;