/* eslint-disable @typescript-eslint/no-var-requires */
import { client_email as ClientEmail, private_key as PrivateKey } from '../secrets.json'
const { google } = require('googleapis')

const createSheet = async () => {
  const client = new google.auth.JWT(
    ClientEmail,
    null,
    PrivateKey,
    ['https://www.googleapis.com/auth/spreadsheets']
  )

  const gsapi = google.sheets({ version: 'v4', auth: client })

  const resource = {
    properties: {
      title: 'New Spreadsheet'
    }
  }

  try {
    const response = await gsapi.spreadsheets.create({
      resource,
      fields: 'spreadsheetId'
    })
    return response.data.spreadsheetId
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error creating sheet', error)
    throw error
  }
}

export default { createSheet }
