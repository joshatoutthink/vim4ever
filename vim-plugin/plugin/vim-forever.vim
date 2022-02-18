" Put description here!!!
" Last Change:  2021 Aug 12
" Maintainer:   Josh
" License:      GNU General Public License v3.0

if exists('g:loaded_vim_forever') | finish | endif " prevent loading file twice

let s:save_cpo = &cpo
set cpo&vim

function! VimForeverStart()
endfunction

command! VimForeverStart call VimForeverStart()
command! SendClient lua require'send'.buffer_to_client() 
	
function! ToggleVimForeverStart()
    if !exists('#TestAutoGroup#BufEnter')
        augroup TestAutoGroup
            autocmd!
						autocmd BufWritePost * SendClient
        augroup END
    else
        augroup TestAutoGroup
            autocmd!
        augroup END
    endif
endfunction


command! ToggleVimForeverStart call ToggleVimForeverStart()


let &cpo = s:save_cpo
unlet s:save_cpo

let g:loaded_vim_forever = 1
