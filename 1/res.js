require('dotenv').config()
const axios = require('axios')

  const userAction = async () => {
    console.log("tuki1");
    const response = await fetch('https://api.globalid.dev/v1/identities?gid_name=gidt-andev3', {
      method: 'GET',
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log("tuki");
  }
console.log(userAction);

/*
const getUser = function(gidName){

}

const getUserUuid = async function (gidName) {
console.log("Getam userja")
const aa="0"
try {
const response = await axios({
method: 'GET',
url: `${process.env.BASE_API_URL_DEV}/v1/identities?gid_name=${gidName}`
})
console.log(response.data[0].gid_uuid);
return aa = "5"
} catch (err) {
console.log(err)
}
}
let user = "gidt-andev03"
const a = getUserUuid(user)
console.log(a);


*/
// const { getAccessToken } = require('@globalid/consent-service-sdk/dist/helpers')
// const axios = require('axios')
// const uuidGenerator = require('uuid')

// module.exports = function () {
//     return ({
//         sendTextMessage: async function (token, channel, message) {
//             console.log("Send message")

//             try {
//                 const response = await axios({
//                     method: 'POST',
//                     url: `${process.env.BASE_API_URL}/v2/messages`,
//                     data: {
//                         channel_id: channel,
//                         message: {
//                             uuid: uuidGenerator.v4(),
//                             type: "TEXT",
//                             content: `{"text":"${message}"}`
//                         },
//                     },
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     },
//                 })
//                 return response
//             }
//             catch (err) {
//                 // For block user, we don't want error in log
//                 if (err.response.status != 403) {
//                     console.log(err)
//                 }
//                 else {
//                     return err
//                 }
//             }
//         },

//         sendTextMessageEncrypted: async function (token, channel, message, mentionData) {
//             console.log("Send message")
//             try {
//                 const response = await axios({
//                     method: 'POST',
//                     url: `${process.env.BASE_API_URL}/v2/messages`,
//                     data: {
//                         channel_id: channel,
//                         message: {
//                             uuid: uuidGenerator.v4(),
//                             type: "ENCRYPTED_TEXT",
//                             content: message,
//                             meta: {
//                                 mentions: mentionData
//                             }
//                         },
//                     },
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     },
//                 })
//                 return response
//             }
//             catch (err) {
//                 // For block user, we don't want error in log
//                 if (err.response.status != 403) {
//                     console.log(err)
//                 }
//                 else {
//                     return err
//                 }
//             }
//         },

//         getChannelID: async function (token, User) {
//             console.log("Get channel ID")
//             const myUUID = await this.getUserUuid(process.env.MOBILE_WEB_USER);
//             const receiverUUID = await this.getUserUuid(User)

//             try {
//                 const response = await axios({
//                     method: 'POST',
//                     url: `${process.env.BASE_API_URL}/v1/channels/search`,
//                     data: {
//                         channelTypes: ["PERSONAL"],
//                         participants: [myUUID, receiverUUID]
//                     },
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     },
//                 })
//                 return response.data.data.channels[0].id
//             }
//             catch (err) {
//                 console.log(err)
//             }
//         },

//         getLastUUIDMessagesForChannel: async function (token, channel) {
//             console.log("Get messages");

//             try {
//                 const response = await axios({
//                     method: "GET",
//                     url: `${process.env.BASE_API_URL}/v2/channels/${channel}/messages?per_page=50`,
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "application/json",
//                     },
//                 });
//                 return response.data.messages[0].uuid;
//             } catch (err) {
//                 console.log(err);
//             }
//         },

//         typingEvent: async function (token, channel) {
//             console.log("Send typing event")
//             try {
//                 const response = await axios({
//                     method: 'PUT',
//                     url: `${process.env.BASE_API_URL}/v2/channels/${channel}/typing-event`,
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     },
//                 })
//             }
//             catch (err) {
//                 console.log(err)
//             }
//         },

//         sendDelivered: async function (token, channel) {
//             const lastMessage = await this.getLastUUIDMessagesForChannel(token, channel);

//             try {
//                 const response = await axios({
//                     method: "PUT",
//                     url: `${process.env.BASE_API_URL}/v2/messages/${lastMessage}/delivered`,
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "application/json",
//                     },
//                 });
//                 return response;
//             } catch (err) {
//                 console.log(err);
//             }
//         },

//         sendSeen: async function (token, channel) {
//             const lastMessage = await this.getLastUUIDMessagesForChannel(token, channel);

//             try {
//                 const response = await axios({
//                     method: "PUT",
//                     url: `${process.env.BASE_API_URL}/v2/messages/${lastMessage}/seen`,
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "application/json",
//                     },
//                 });
//                 return response;
//             } catch (err) {
//                 console.log(err);
//             }
//         },

//         blockUser: async function (token, User) {
//             const userUUID = await this.getUserUuid(User)
//             try {
//                 const response = await axios({
//                     method: 'PUT',
//                     url: `${process.env.BASE_API_URL}/v1/messaging/blocked-users/${userUUID}`,
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     },
//                 })
//                 return response
//             }
//             catch (err) {
//                 console.log(err)
//             }
//         },

//         unblockUser: async function (token, User) {
//             const userUUID = await this.getUserUuid(User)
//             try {
//                 const response = await axios({
//                     method: 'DELETE',
//                     url: `${process.env.BASE_API_URL}/v1/messaging/blocked-users/${userUUID}`,
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     },
//                 })
//                 return response
//             }
//             catch (err) {
//                 console.log(err)
//             }
//         },

//         createGroupAPI: async function (token, groupName, groupVisibility = "visible", memberVisibility = "anyone", membershiptType = "open") {
//             console.log("Create group")
//             try {
//                 const response = await axios({
//                     method: 'POST',
//                     url: 'https://globalid.construction/_api/v1/groups',
//                     data: {
//                         gid_name: groupName,
//                         display_name: groupName,
//                         description: "This is automated group",
//                         group_visibility: groupVisibility,
//                         member_visibility: memberVisibility,
//                         membership_type: membershiptType,
//                     },
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     },
//                 })
//                 const groupUUID = response.data.gid_uuid

//                 return [response, groupUUID]
//             }
//             catch (err) {
//                 console.log(err)
//             }
//         },

//         getAccessToken: async function (userName) {
//             try {
//                 const response = await axios({
//                     method: 'POST',
//                     url: `${process.env.BASE_API_URL}/v1/auth/token`,
//                     data: {
//                         client_id: process.env.CLIENT_ID,
//                         grant_type: process.env.GRANT_TYPE,
//                         globalid: userName,
//                         password: process.env.MOBILE_API_PASSWORD
//                     }
//                 })
//                 return response.data
//             } catch (err) {
//                 console.log(err)
//             }
//         },
// /*
//         //Currently only on dev 17.10.2022
//         getClientIntrospectAccessToken: async function () {
//             try {
//                 const response = await axios({
//                     method: 'POST',
//                     url: `${process.env.AUTH_BASE_API_URL}/realms/globalid/protocol/openid-connect/token`,
//                     data: {
//                         grant_type: process.env.KEY_CLOAK_GRANT_TYPE,
//                         client_id: process.env.KEY_CLOAK_CLIENT_ID,
//                         client_sercret: process.env.KEY_CLOAK_CLI_CLIENT_SECRET
//                     }
//                 })
//                 return response.data
//             } catch (err) {
//                 console.log(err)
//             }
//         },
// */
//         testUUID: async function (gidName) {
//             try {
        
//                 const response = await axios({
//                     method: 'GET',
//                     url: `${process.env.BASE_API_URL}/v1/identities?gid_name=${gidName}`
//                 })
//                 return response
//             } catch (err) {
//                 console.log(err)
//             }
//         },

//         inviteUser: async function (token, groupUUID, recipientUUID, inviteMessage = "Hello, I’m inviting you to join my group.") {
//             console.log("Create group")
//             try {
//                 const response = await axios({
//                     method: 'POST',
//                     url: `${process.env.BASE_API_URL}/v1/groups/${groupUUID}/invitations`,
//                     data: {
//                         recipient_uuid: recipientUUID,
//                         message: inviteMessage,
//                     },
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     },
//                 })
//                 return [response]
//             }
//             catch (err) {
//                 console.log(err)
//             }
//         },

//         getUserUuid: async function (gidName) {
//             console.log("Getam userja")
//             try {
//                 const response = await axios({
//                     method: 'GET',
//                     url: `${process.env.BASE_API_URL}/v1/identities?gid_name=${gidName}`
//                 })

//                 return response.data[0].gid_uuid
//             } catch (err) {
//                 console.log(err)
//             }
//         },

//         getGroupID: async function (token, groupName) {

//             const response = await axios({
//                 method: 'GET',
//                 url: `${process.env.BASE_API_URL}/v1/groups?text=${groupName}`,
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             })

//             if (response.data.data.length > 0) {
//                 return response.data.data[0].uuid
//             } else {
//                 return null
//             }
//         },

//         deleteGroupAPI: async function (token, groupNames) {
//             console.log("Delete group")
//             for (const groupName of groupNames) {
//                 const groupUUID = await this.getGroupID(token, groupName)

//                 if (groupUUID == null) {
//                     console.log("Group does not exist")
//                 } else {
//                     try {
//                         const response = await axios({
//                             method: 'DELETE',
//                             url: `${process.env.BASE_API_URL}/v1/groups/${groupUUID}`,
//                             headers: {
//                                 'Authorization': `Bearer ${token}`
//                             }
//                         })
//                     } catch (err) {
//                         console.log(err)
//                     }

//                 }
//             }
//         },

//         getJoinedGroupList: async function (token) {
//             const response = await axios({
//                 method: 'GET',
//                 url: `${process.env.BASE_API_URL}/v1/groups?per_page=20&page=1&membershipPosition=Joined`,
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             })

//             return response.data
//         },

//         // function for deleting all group from one user
//         deleteAllGroupsAPI: async function (token) {
//             const listOfGroups = await this.getJoinedGroupList(token);
//             for (const groups of listOfGroups.data) {
//                 const groupUUID = groups.uuid
//                 try {
//                     const response = await axios({
//                         method: 'DELETE',
//                         url: `${process.env.BASE_API_URL}/v1/groups/${groupUUID}`,
//                         headers: {
//                             'Authorization': `Bearer ${token}`
//                         }
//                     })
//                 } catch (err) {
//                     console.log(err)
//                 }
//             }
//         }
//     })
// }

console.log(process.env.A);