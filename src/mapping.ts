import {
  Record as RecordEvent,
  Revoke as RevokeEvent
} from "../generated/CorruptionsFAQ/CorruptionsFAQ"
import { Record, Revoke } from "../generated/schema"

export function handleRecord(event: RecordEvent): void {
  let entity = new Record(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.topic = event.params.topic
  entity.content = event.params.content
  entity.save()
}

export function handleRevoke(event: RevokeEvent): void {
  let entity = new Revoke(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.topic = event.params.topic
  entity.save()
}
