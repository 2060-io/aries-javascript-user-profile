import { BaseRecord } from '@aries-framework/core'
import { v4 as uuid } from 'uuid'

export interface UserProfileData {
  displayName?: string
  displayPicture?: string
  description?: string
  defaultCommunicationPolicyId?: string
}

export interface UserProfileStorageProps extends UserProfileData {
  id?: string
  createdAt?: Date
}

export class UserProfileRecord extends BaseRecord implements UserProfileStorageProps {
  public displayName?: string
  public displayPicture?: string
  public description?: string
  public defaultCommunicationPolicyId?: string

  public static readonly type = 'UserProfileRecord'
  public readonly type = UserProfileRecord.type

  public constructor(props: UserProfileStorageProps) {
    super()

    if (props) {
      this.id = props.id ?? uuid()
      this.createdAt = props.createdAt ?? new Date()
      this.displayName = props.displayName
      this.displayPicture = props.displayPicture
      this.description = props.description
    }
  }

  public getTags() {
    return {
      ...this._tags,
    }
  }
}
