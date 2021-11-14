const axios = require('axios')

async function checkStock () {
  try {
    const { data, status } = await axios.request({
      url: "https://www.apple.com/ca/shop/pickup-message-recommendations?mt=compact&searchNearby=true&store=R333&product=MLJA3VC/A",
      "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "dssid2=001bd92a-c473-46bd-8603-a0cb7cfc0821; dssf=1; geo=CA; s_cc=true; pxro=1; dslang=CA-EN; site=CAN; as_cn=~HEMswiZK6OEiPUrcp_wGaDhzOkKElac5UVDpu3Z9vvg=; as_loc=4a664c6257a47990aa8fc3eecdc6b64d85c257b23b5c54139b938f8d66f100ccde2f54adb5a1a00cd6b5ec4e4e7e584e3c67b8c5bcdaaebda8d7db55430e2b9e8ab0c399500d8283d2880b5f4613be54c8947da89bb3a23a76198d752872d468; s_campaign=AOS-AM-105208-A20000056674; at_check=true; as_uct=2; acn01=mHRn5ib8kiwiP58xTnDsx9BvH/dDlafDKAABlZNZ+Hen; as_disa=AAAjAAAB-xSsjzI2AFZv8UbmQIxQrs43p06gPPB2f6m71lm7xO6AgjDXeBZI6Akv1JbR3VpqAAIB64xSGmG-KEXT-DbfTMjc6LWnSDcAj3ip08B8sEzUJmY=; as_rec=ce96b3f55a55895f3e476b5933299720351362e63a86363e80b35b1f598e2322bf7061ff03c315e7b19b3051959fb51b4726347c0a1479391624906cdc4bcd86c5d14a241ab7465f80e96f6542e508a3; as_ltn_ca=AAQEAMFTCPwGPJ_PESEkay8ibLSVkYur2CDTYhDnpHJTCk85jFiMarBxBVDj4ULggLnRjbxR_dY6YCl7Ko0BaziSQR2Ymwsb2cw; POD=ca~en; XID=a98f8e7b9cc0dad83a2e94a2d4a2a58e; s_ppvl=acs%253A%253Akb%253A%253Aht%253A%253Aht201196%253A%253AMove%2520from%2520Android%2520to%2520iPhone%252C%2520iPad%252C%2520or%2520iPod%2520touch%2520%2528en-ca%2529%2C95%2C25%2C4383%2C1920%2C947%2C1920%2C1080%2C1%2CP; s_orientation=%5B%5BB%5D%5D; s_ppv=acs%253A%253Aadf%253A%253Aiphone%253A%253Ausing_iphone%253A%253Athread-252157792%2520%2528en-us%2529%2C84%2C43%2C1838%2C1920%2C947%2C1920%2C1080%2C1%2CP; s_orientationHeight=1838; as_sfa=MnxjYXxjYXx8ZW5fQ0F8Y29uc3VtZXJ8aW50ZXJuZXR8MHwwfDE; as_pcts=4ptwSaIom0fOCSXe2j-0+2A9_sxsEXzHF4jK4CWQjUi0w_fyipI_MxzKinzf+AZMO8Jcf5cH5TbJLax56dbFbNBfnjxWuHPiGXRszBZ26zR+Gz_0cHkpd; rtsid=%7BCA%3D%7Bt%3Da%3Bi%3DR333%3B%7D%3B%7D; s_fid=690C13E364D2170F-2436D445BC8BE2C4; s_vi=[CS]v1|30C04EA81D51F08E-60000EF3B81BEC11[CE]; as_dc=nc; as_atb=1.0|MjAyMS0xMS0wMSAwNzowNzozMQ|125176f3d035608691882179933df5eb6faed60a; mbox=session#c6f8b63a03a94e009d321e2b7950900b#1635820695|PC#c6f8b63a03a94e009d321e2b7950900b.34_0#1635820655; s_sq=applestoreww%252Capplecaglobal%3D%2526c.%2526a.%2526activitymap.%2526page%253DAOS%25253A%252520home%25252Fshop_iphone%25252Ffamily%25252Fiphone_13_pro%25252Fselect%2526link%253Diphone%252520availabilitypostal%252520code%252520resets%252520%252528inner%252520text%252529%252520%25257C%252520no%252520href%252520%25257C%252520body%2526region%253Dbody%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253DAOS%25253A%252520home%25252Fshop_iphone%25252Ffamily%25252Fiphone_13_pro%25252Fselect%2526pidt%253D1%2526oid%253DfunctionVc%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DDIV%26appleglobal%3D%2526c.%2526a.%2526activitymap.%2526page%253Diphone%25252013%252520pro%252520-%252520overview%252520%252528ca%252529%2526link%253Dbuy%252520iphone%25252013%252520pro%252520-%252520%25252Fca%25252Fshop%25252Fgoto%25252Fbuy_iphone%25252Fiphone_13_pro%252520-%252520ac-localnav%2526region%253Dac-localnav%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Diphone%25252013%252520pro%252520-%252520overview%252520%252528ca%252529%2526pidt%253D1%2526oid%253Dhttps%25253A%25252F%25252Fwww.apple.com%25252Fca%25252Fshop%25252Fgoto%25252Fbuy_iphone%25252Fiphone_13_pro%2526ot%253DA",
        "Referer": "https://www.apple.com/ca/shop/buy-iphone/iphone-13-pro/6.7-inch-display-256gb-gold",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });
    // const data = await response.json()
    const { stores } = data.body.PickupMessage
    const STORES = ['Fairview','Yorkdale','Sherway Gardens','Markville Shopping Centre']
    const DEVICES = [
      'MLJD3VC/A',
      // 'MLJ93VC/A',
      'MLJA3VC/A',

    ]
    const myStores = stores.filter(store => STORES.indexOf(store.storeName) !== -1)
    const myStoresFiltered = myStores.map(({ storeName, partsAvailability }) => {
      const availDevices = Object.keys(partsAvailability).map(part => { return partsAvailability[part].storePickupProductTitle })
      // return { storeName, availDevices }
      return "Store: " + storeName + " :: " + JSON.stringify(availDevices)
    })
    console.log(myStoresFiltered)
    const storesWithStock = myStores.filter(store => DEVICES.indexOf(Object.keys(store.partsAvailability)) !== -1)
    console.log(storesWithStock)
  }
  catch (error) {
    console.log(error)
  }
}
// checkStock()
setInterval(
  checkStock,
  1500
)