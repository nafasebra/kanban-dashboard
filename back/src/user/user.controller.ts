import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, description: 'User created successfully' })
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get user by ID' })
    @ApiParam({ name: 'id', description: 'User ID' })
    @ApiResponse({ status: 200, description: 'User found' })
    @ApiResponse({ status: 404, description: 'User not found' })
    getUserById(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update user by ID' })
    @ApiParam({ name: 'id', description: 'User ID' })
    @ApiBody({ type: UpdateUserDto })
    @ApiResponse({ status: 200, description: 'User updated successfully' })
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete user by ID' })
    @ApiParam({ name: 'id', description: 'User ID' })
    @ApiResponse({ status: 200, description: 'User deleted successfully' })
    deleteUser(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
