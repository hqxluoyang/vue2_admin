/**
  author : sailing
  date: 2016-10-26
  fun: 获得上传成功的数据
***/

export default {
  getMusicData (file) {
    const backfile = {}
    console.log("file :" , file['mp3tag'])
    backfile['file_ContentType'] = file['file_ContentType']
    backfile['fileext'] = file['file_Ext']
    backfile['size'] = file['file_Size']
    backfile['file_NameNew'] = file['file_NameNew']
    backfile['singer'] = file['mp3tag'] ? file['mp3tag']['singer'] : ''
    backfile['song'] = file['mp3tag'] ? file['mp3tag']['song'] : ''
    backfile['album'] = file['mp3tag'] ? file['mp3tag']['album'] : ''
   
    backfile['filepath'] = file['file_LocalPath']
    backfile['filename'] = file['file_OriginalFilename']
  
    backfile['fileuuid'] = this.getMusicId(file['file_NameNew'])

    return backfile
  },
  getMusicId (name) {
    let nameArr = name.split('.')
    return nameArr[0]
  }
}