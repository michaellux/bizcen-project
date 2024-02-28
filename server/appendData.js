/* eslint-disable @typescript-eslint/no-var-requires */
import { client_email as ClientEmail, private_key as PrivateKey } from '../secrets.json'
const { google } = require('googleapis')

const appendData = async (spreadsheetId, range, values) => {
  const client = new google.auth.JWT(
    ClientEmail,
    null,
    PrivateKey,
    ['https://www.googleapis.com/auth/spreadsheets']
  )

  const gsapi = google.sheets({ version: 'v4', auth: client })

  const request = {
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [values]
    }
  }

  try {
    const response = await gsapi.spreadsheets.values.append(request)
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error appending data to sheet', error)
    throw error
  }
}

export default { appendData }
