import DB from './db'
import { SettingOptions } from '../overlays/drawers/SettingsDrawer'
import { DBMetadataCharacter } from '../../types/metadata'

export const isWeirdDPSBlocked = (character: DBMetadataCharacter) => {
  const weirdDPSAllowed = DB.getState().settings[SettingOptions.AllowWeirdDPSBuilds.name] == SettingOptions.AllowWeirdDPSBuilds.Enabled
  return !weirdDPSAllowed && character.scoringMetadata.simulation?.weirdDPS === true
}
