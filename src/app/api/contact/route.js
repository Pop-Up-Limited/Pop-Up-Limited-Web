export async function POST(request) {
  try {
    const data = await request.json()
    
    // 打印接收到的数据用于测试
    console.log('收到联系表单提交:')
    console.log('类型:', data.type)
    console.log('数据:', JSON.stringify(data, null, 2))
    
    // 返回成功响应
    return Response.json(
      { 
        success: true, 
        message: '提交成功',
        data: data 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('处理联系表单时出错:', error)
    return Response.json(
      { 
        success: false, 
        message: '服务器错误' 
      },
      { status: 500 }
    )
  }
}

