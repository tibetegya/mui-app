// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log('req.body', req.body)
  try {
    const { username, password } = JSON.parse(req.body)
    if (username == 'george') {
      res.status(200).json({
        data: {
          token: 'jwt---token'
        }
      })
    } else {
      throw new Error('403')
    }
  } catch (error) {
    const { stack, message } = error
    switch (error.message) {
      case '403':
        res.status(403).json({ error: { message: 'Ivalid username or password' } })
      case '401':
        res.status(401).json({ error: { message: 'Bad Input' } })
      default:
        res.status(500).json({ error: { message: 'An error has occured.', stack: stack.slice(0, 50), message } })

    }

  }
}
