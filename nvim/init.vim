call plug#begin()
Plug 'arcticicestudio/nord-vim'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
call plug#end()

colorscheme nord
let mapleader=" "

let g:coc_global_extensions = [
	\ 'coc-tsserver',
	\ 'coc-eslint'
	\ ]

source $HOME/.config/nvim/plug-config/coc.vim

set expandtab
set smarttab
set shiftwidth=2
set softtabstop=2
set tabstop=2
