export interface ITeachableAssignment {
  kind: string
  url: string | null
  text: string | null
}

enum AttachmentType {
  Text = 'text',
  NativeComments = 'native_comments',
  Image = 'image',
  Video = 'video',
  Pdf = 'pdf',
  Quiz = 'quiz',
  CodeDisplay = 'code_display',
  CodeEmbed = 'code_embed',
  Upsell = 'upsell',
}

const UNSUPPORTED_TYPES = [
  AttachmentType.NativeComments,
  AttachmentType.Pdf,
  AttachmentType.Pdf,
  AttachmentType.Quiz,
  AttachmentType.CodeDisplay,
  AttachmentType.CodeEmbed,
  AttachmentType.Upsell,
]

const TeachableAttachment = ({ kind, url, text }: ITeachableAssignment) => {
  const attachmentType = kind as AttachmentType

  if (UNSUPPORTED_TYPES.includes(attachmentType)) {
    return <div className="divider"></div>
  }

  if (attachmentType === AttachmentType.Image) {
    return <img className="max-w-screen-md" src={url} />
  }

  if (attachmentType === AttachmentType.Video) {
    return (
      <video className="max-w-screen-md" controls>
        <source src={url} />
      </video>
    )
  }

  const lectureHtml = { __html: text }
  return (
    <article
      className="prose-lg prose"
      dangerouslySetInnerHTML={lectureHtml}
    ></article>
  )
}

export default TeachableAttachment
