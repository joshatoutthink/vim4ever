local api = vim.api
local lunajson = require 'lunajson'

local buffer_to_string = function()
    local content = vim.api.nvim_buf_get_lines(0, 0, vim.api.nvim_buf_line_count(0), false)
    return table.concat(content, "\n")
end

local buffer_to_client = function ()
	local content = buffer_to_string()
	local encodedContent = lunajson.encode(content)
	local msg = api.nvim_call_function('system', {'curl -X POST -d \'{"code":'..encodedContent..'}\' http://localhost:8082/'})
end

return {
	buffer_to_client = buffer_to_client,
}
